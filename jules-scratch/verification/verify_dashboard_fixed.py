
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:3000")
        page.screenshot(path="jules-scratch/verification/dashboard-fixed.png")
        page.click("text=Users")
        page.screenshot(path="jules-scratch/verification/users-fixed.png")
        browser.close()

run()
