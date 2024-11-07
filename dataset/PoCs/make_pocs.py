import sqlite3

# Connect to the database"D:\Documents\realworldBacktrack\Hunter_Main\javascript_regexes.db"
conn = sqlite3.connect(r"D:\Documents\realworldBacktrack\Hunter_Main\javascript_regexes.db")
c = conn.cursor()

# Query Paths
c.execute("""
  SELECT DISTINCT
    (regexes.repository || '/' || regexes.path) AS repo_path
  FROM 
    regexes
  JOIN
    instance ON regexes.id = instance.original_id
  WHERE 
    regexes.repoStars >= 40000
""")
paths = c.fetchall()
paths_dict = {path[0] : i+1 for i, path in enumerate(paths)}

# 读取D:\Documents\DSE_Instances\for publish下所有文件夹名
import os
import re
import shutil
import json

for root, dirs, files in os.walk(r"D:\Documents\DSE_Instances\for publish"):
  if len(root.split("\\")) > 5:
    continue
  for dir in dirs:
    print(dir)
    if not re.match(r'^\d+$', dir):
      continue
    # 读取raw文件夹下的info.json文件
    with open(os.path.join(root, dir, 'raw', 'info.json'), 'r') as f:
      info = json.load(f)
    # 根据path查找id
    id_num = paths_dict[info["repository"]+"/"+info["path"]]
    # 检查脚本运行目录下是否存在id_num文件夹
    pwd = os.getcwd()
    if not os.path.exists(os.path.join(pwd, str(id_num))):
      os.makedirs(os.path.join(pwd, str(id_num)))
      os.makedirs(os.path.join(pwd, str(id_num), '1'))
      # 将dir文件夹下所有除了raw文件夹内的文件移动到id_num/1文件夹下
      for file in os.listdir(os.path.join(root, dir)):
        if file != "raw":
          shutil.move(os.path.join(root, dir, file), os.path.join(pwd, str(id_num), '1', file))
      # 将info.json文件移动到id_num文件夹下
      shutil.move(os.path.join(root, dir, 'raw', 'info.json'), os.path.join(pwd, str(id_num), '1', 'info.json'))
    else:
      # 查看id_num文件夹下以数字命名的文件夹数量
      num = 0
      for file in os.listdir(os.path.join(pwd, str(id_num))):
        if re.match(r'^\d+$', file):
          num += 1
      # 创建新的数字命名文件夹
      os.makedirs(os.path.join(pwd, str(id_num), str(num+1)))
      # 将dir文件夹下所有除了raw文件夹内的文件移动到id_num/num+1文件夹下
      for file in os.listdir(os.path.join(root, dir)):
        if file != "raw":
          shutil.move(os.path.join(root, dir, file), os.path.join(pwd, str(id_num), str(num+1), file))
      # 将info.json文件移动到id_num/num+1文件夹下
      shutil.move(os.path.join(root, dir, 'raw', 'info.json'), os.path.join(pwd, str(id_num), str(num+1), 'info.json'))

    

