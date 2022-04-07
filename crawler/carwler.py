from requests_html import HTMLSession
import time
import datetime
import pytz

Gtalk = 'https://www.gcores.com/talks/'
GitUrl = 

def getTalk(Tid): #检查TID是否存在
    session = HTMLSession()
    url = Gtalk + Tid
    r = session.get(url)
    # print(r.html.text)
   return r.html.find('.aat_container') ? true : false
    
def getTID(): #获取当前TID



    with open('TID.md', 'a', encoding="utf-8") as f:  #使用utf-8编码
        s = f'{t} 粉丝{followers} 关注{followees} 积分{score} 排名{rank}<br>'
        print(s)
        f.write(s + '\n')


if __name__ == '__main__':
    get_content()