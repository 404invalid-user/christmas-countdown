from phew import server, connect_to_wifi, is_connected_to_wifi

from ST7735 import TFT
from sysfont import sysfont
from seriffont import seriffont
from terminalfont import terminalfont
from machine import SPI, Pin
import time
import math
import usocket
import utime
import socket
import struct
import ujson


def load_wifi_config(file_path):
    try:
        with open(file_path, "r") as file:
            return ujson.load(file)
    except Exception as e:
        print(f"Failed to load WiFi config: {e}")
        return None


NTP_DELTA = 2208988800
NTP_SERVER = "pool.ntp.org"

spi = SPI(
    1, baudrate=20000000, polarity=0, phase=0, sck=Pin(10), mosi=Pin(11), miso=None
)
tft = TFT(spi, 16, 17, 18)
tft.initr()
tft.rgb(True)
tft.rotation(3)

WIFI_MAX_ATTEMPTS = 3
SETTINGS_DISPLAY_TEST = True

print("doing a thing")


def TFTColourTest():
    tft.fill(TFT.WHITE)
    time.sleep(0.5)
    tft.fill(TFT.BLACK)
    time.sleep(0.5)
    tft.fill(TFT.GRAY)
    time.sleep(0.5)
    tft.fill(TFT.RED)
    time.sleep(0.5)
    tft.fill(TFT.MAROON)
    time.sleep(0.5)
    tft.fill(TFT.GREEN)
    time.sleep(0.5)
    tft.fill(TFT.FOREST)
    time.sleep(0.5)
    tft.fill(TFT.BLUE)
    time.sleep(0.5)
    tft.fill(TFT.NAVY)
    time.sleep(0.5)
    tft.fill(TFT.CYAN)
    time.sleep(0.5)
    tft.fill(TFT.YELLOW)
    time.sleep(0.5)
    tft.fill(TFT.PURPLE)


"""TODO: if wifi fails to connect setup ap and display name and random pw
then setup web interface to connect to wifi ooor let user set time using their phone
"""


def wifiConnect():
    v = 20
    tft.fill(TFT.WHITE)
    tft.text((10, v), "connecting to wifi...", TFT.BLACK, sysfont, 1, nowrap=False)
    v += sysfont["Height"]

    wifi_config = load_wifi_config("wifi-config.json")
    if not wifi_config:
        print("Error: Unable to load WiFi credentials. Check wifi_config.json.")
        return

    ssid = wifi_config.get("ssid")
    password = wifi_config.get("password")

    wifi_current_attempt = 1
    while wifi_current_attempt < WIFI_MAX_ATTEMPTS:
        ip_address = connect_to_wifi(ssid, password)
        #         ip_address = connect_to_wifi(wifi_credentials["ssid"], wifi_credentials["password"])
        print("dn")
        if is_connected_to_wifi():
            break
        else:
            wifi_current_attempt += 1

        if is_connected_to_wifi():
            v = 20
            tft.fill(TFT.WHITE)
            print(f"Connected to wifi, IP address {ip_address}")
            tft.text((10, v), "connected to wifi", TFT.BLACK, sysfont, 1, nowrap=False)
            v += sysfont["Height"]
            tft.text((10, v), "ip: " + ip, TFT.BLACK, sysfont, 1, nowrap=False)
            v += sysfont["Height"]
            tft.text(
                (10, v + 10), "starting in 10secs", TFT.BLACK, sysfont, 1, nowrap=False
            )
            time.sleep(10)
            break
        else:
            v = 20
            tft.fill(TFT.WHITE)
            tft.text(
                (10, v), f"failed to connect to wifi", TFT.RED, sysfont, 1, nowrap=False
            )
            v += sysfont["Height"] + 5
            tft.text((10, v), f"join to setup", TFT.BLACK, sysfont, 2, nowrap=False)
            v += sysfont["Height"] + 10
            tft.text((10, v), f"host: pimas", TFT.BLACK, sysfont, 1, nowrap=False)
            v += sysfont["Height"] + 2
            tft.text((10, v), f"pw:   p1ma5!", TFT.BLACK, sysfont, 1, nowrap=False)


def tftprintTimeLeft(text):
    """tft.fill(TFT.GRAY);"""
    tft.fill(TFT.BLACK)
    v = 45
    tft.text((30, v), text, TFT.RED, terminalfont, 6, nowrap=True)


# Function to fetch time from NTP server


def set_time_ntp():
    NTP_QUERY = bytearray(48)
    NTP_QUERY[0] = 0x1B
    addr = socket.getaddrinfo(NTP_SERVER, 123)[0][-1]
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.settimeout(1)
        res = s.sendto(NTP_QUERY, addr)
        msg = s.recv(48)
    finally:
        s.close()
    val = struct.unpack("!I", msg[40:44])[0]
    t = val - NTP_DELTA
    tm = time.gmtime(t)
    machine.RTC().datetime((tm[0], tm[1], tm[2], tm[6] + 1, tm[3], tm[4], tm[5], 0))


# Function to get current time in London timezone
def get_london_time():
    current_time_utc = utime.localtime()
    current_time_london = utime.localtime(
        utime.mktime(current_time_utc) + LONDON_TIMEZONE_OFFSET * 3600
    )
    return current_time_london


# Function to fetch time from NTP server every hour
def fetch_time_periodically():
    while True:
        # Wait for an hour
        utime.sleep(3600)
        # Fetch and set time from NTP server
        set_time_from_ntp()


# Timezone offset for London (GMT or BST)
LONDON_TIMEZONE_OFFSET = 0  # GMT (no daylight saving time)


# Function to calculate time until target date
def time_until_target_date(target_month, target_day, target_year=None):
    if target_year is None:
        target_year = get_london_time()[0]  # Use current year if not specified

    target_time = utime.mktime((target_year, target_month, target_day, 0, 0, 0, 0, 0))
    current_time = utime.mktime(get_london_time())

    time_until = target_time - current_time

    if time_until < 0:
        # Target date has passed
        return None

    days = time_until // (24 * 3600)
    time_until %= 24 * 3600
    hours = time_until // 3600
    time_until %= 3600
    minutes = time_until // 60
    seconds = time_until % 60

    return {"days": days, "hours": hours, "minutes": minutes, "seconds": seconds}


# Example usage:
target_month = 12
target_day = 25
# target_year = 2024  # Optional, default is current year

if SETTINGS_DISPLAY_TEST == True:
    TFTColourTest()

wifiConnect()
set_time_ntp()

while True:
    if is_connected_to_wifi():
        remaining_time = time_until_target_date(target_month, target_day)
        if remaining_time is None:
            print("Target date has passed.")
            break
        print("Time until target date:", remaining_time)
        tftprintTimeLeft(str(remaining_time["days"]))
        utime.sleep(20)  # Check every second
