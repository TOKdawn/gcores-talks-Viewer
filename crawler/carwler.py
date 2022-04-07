from requests_html import HTMLSession
import time
import datetime
import pytz

Gtalk = 'https://www.gcores.com/talks/'
GitUrl = 'https://github.com/TOKdawn/gcores-talks-Viewer/blob/main/crawler/TID.html'
OldTID = getTID()
   #检查TID是否存在
    session = HTMLSession()
    url = Gtalk + Tid
    r = session.get(url)
    # print(r.html.text)
   return r.html.find('.aat_container') ? true : false
    
def getTID(): #获取当前TID
    session = HTMLSession()
    url = Gtalk + Tid
    r = session.get(url)
    return r.html.text

def saveTID(Tid): #保存TID
    with open('TID.md', 'a', encoding="utf-8") as f:  #使用utf-8编码
        s = f'{Tid}'
        print(s)
        f.write(s + '\n')


if __name__ == '__main__':
    get_content()