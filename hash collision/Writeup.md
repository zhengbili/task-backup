## Title
hash collision

## Tools
- [crc32](https://github.com/theonlypwner/crc32)
- [fastcoll](https://www.win.tue.nl/hashclash/)
- [sha1collider](https://github.com/nneonneo/sha1collider)
- hackbar
- requests

## Steps
- 分析js代码，找到真正的题目http://localhost:10087/hackertyper/core.php
- geektyper使用指南（小键盘）
	- 按+进入拒绝模式
	- 按-进入访问模式
	- 按*进入冷战模式
	- 按/进入安全警报
	- 按0启动新的终端
	- 按2启动电子宠物
	- 按8启动监视程序
	- 按Esc退回主界面
- php弱类型
	- 传入两个不同数组即可
- crc32碰撞
	- 使用工具：`python2 crc32.py reverse 0xffffffff`
- md5碰撞
	- 使用工具：`fastcoll_v1.0.0.5.exe -p test.txt -o test1.txt test2.txt`
	- 网上例子：https://www.jianshu.com/p/c9089fd5b1ba
- sha1碰撞
	- 使用工具：`python3 collide.py PDF1.pdf PDF2.pdf`
	- 网上例子：下载[shattered-1.pdf](https://shattered.io/static/shattered-1.pdf)和[shattered-2.pdf](https://shattered.io/static/shattered-2.pdf)

solution.py
```python3
import requests
import codecs

br=requests.Session()
url='http://localhost:10087/hackertyper/core.php'

res1=br.post(url,{'data1[]':'1','data2[]':'2'})
print(res1.text)
res2=br.post(url,{'data1':'08mcbI','data2':'8BGqk1'})
print(res2.text)
res3=br.post(url,{'data1':codecs.decode('0e306561559aa787d00bc6f70bbdfe3404cf03659e704f8534c00ffb659c4c8740cc942feb2da115a3f4155cbb8607497386656d7d1f34a42059d78f5a8dd1ef','hex'),'data2':codecs.decode('0e306561559aa787d00bc6f70bbdfe3404cf03659e744f8534c00ffb659c4c8740cc942feb2da115a3f415dcbb8607497386656d7d1f34a42059d78f5a8dd1ef','hex')})
print(res3.text)
res4=br.post(url,{'data1':open('shattered-1.pdf','rb').read(),'data2':open('shattered-2.pdf','rb').read()})
print(res4.text)
```
