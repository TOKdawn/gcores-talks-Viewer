from requests_html import HTMLSession
import time
import datetime
import pytz
import asyncio


Gtalk = 'https://www.gcores.com/talks/'
GitUrl = 'https://github.com/TOKdawn/gcores-talks-Viewer/blob/main/crawler/TID.html'

async def tryTID(Tid):#检查TID是否存在
    session = HTMLSession()
    url = Gtalk + Tid
    r = session.get(url)
    print(r.html.text)
    if r.html.find('.aat_container'):
      return True
    else:
      return False
    
async def getTID(): #获取当前TID
    session = HTMLSession()
    url = GitUrl
    r = session.get(url)
    TID = r.html.find('.blob-code-inner',first=True).text
    print(TID)
    return TID

OldTID = getTID()

async def saveTID(Tid): #保存TID
  with open('TID.md', 'a', encoding="utf-8") as f:  #使用utf-8编码
    s = f'{Tid}'
    f.write(s + '\n')

def run():
  


if __name__ == '__main__':
  loop = asyncio.get_event_loop()
  run()

  
# RNM 退钱! 要不要搞的这么难!