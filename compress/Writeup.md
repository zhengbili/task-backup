## Title
compress

## Tools
- cloop-utils
- [stegdetect](https://github.com/abeluck/stegdetect.git)
- lads
- NtfsStreamsEditor2

## Steps
- 磁盘分析
	- 分析文件发现为cloop压缩的磁盘镜像`head system.cloop`
	- 查找相关软件`apt search cloop`
	- 安装cloop工具包`sudo apt-get install cloop-utils`（使用方法见[ctf wiki](https://ctf-wiki.github.io/ctf-wiki/misc/disk-memory/problem-zh/#2018-clip)）或者编译安装[cloop](https://github.com/KlausKnopper/cloop)
	- 解压缩磁盘镜像`extract_compressed_fs system.cloop system.img`
	- 创建挂载目录`mkdir -p mnt`
	- 挂载磁盘镜像`mount system.img mnt/`
	- 进入目录`cd mnt`
	- 寻找flag`find |grep flag`
	- 获得flag1`cat etc/bluetooth/flag1.txt`
- 文件提取及修复
	- 分析flag2.jpg（比如`stegdetect tmp/flag2.jpg`）发现后缀冗余数据'pk....'
	- 修复zip文件并提取查看`sed -i "s/pk/PK/g" flag2.jpg && binwalk -e flag2.jpg && cat _flag2.jpg.extracted/flag2.txt`或提取后修复zip文件解压查看`dd bs=1 skip=77468 if=flag2.jpg of=out.zip && sed -i "s/pk/PK/g" out.zip && unzip out.zip && cat flag2.txt`
- 数据流隐藏及zlib解压
	- 分析flag3.rar`unrar info lost+found/flag3.rar`发现提示NTFS，进一步分析发现压缩文件内有NTFS数据流文件，需要在windows下解压（home/hint/g0_w1nd0ws）
	- windows解压文件并扫描（比如`lads /S`）发现数据流文件flag3.zlib，提取（比如使用NtfsStreamsEditor2.exe）得到zlib压缩后的字符串
	- 使用python解zlib压缩得到flag3`python -c "print(__import__('zlib').decompress(open('flag3.txt:flag3.zlib','rb').read()))"`