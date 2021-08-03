import shutil
import requests
from bs4 import BeautifulSoup as bs4
from pathlib import Path 

website_url = "https://elevateug.com/"
res = requests.get(website_url)
res.raise_for_status()
soup = bs4(res.text, 'html.parser')
partners = soup.select(".partner-list")
for partner in partners:
    child = partner.findChildren("img",recursive=False)[0]
    image_url = website_url+child.get("src")
    filename = image_url.split("/")[-1]
    def download():
        image = requests.get(image_url,stream = True)
        image.raw.decode_content = True
        with open(Path.cwd()/"assets/partners"/filename,"wb")as f:
            shutil.copyfileobj(image.raw,f)
        print(f"{filename} downloaded")
    download()
