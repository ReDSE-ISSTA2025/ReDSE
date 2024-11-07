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

# Query info
c.execute("""
  SELECT 
    regexes.regex, 
    regexes.line, 
    regexes.repository, 
    regexes.commitid, 
    regexes.path, 
    regexes.lineNumber, 
    regexes.repoStars
  FROM 
    regexes
  JOIN
    instance ON regexes.id = instance.original_id
  WHERE 
    regexes.repoStars >= 40000
""")
info = c.fetchall()

# 删除所有当前目录下以数字命名的文件夹
import os
import re
import shutil

# for root, dirs, files in os.walk("."):
#   if len(root.split("\\")) > 1:
#     continue
#   for dir in dirs:
#     if not re.match(r'^\d+$', dir):
#       continue
#     print(f"Deleting {dir}")
#     shutil.rmtree(os.path.join(root, dir))

import requests
def download_file(url, destination):
  response = requests.get(url)
  if response.status_code == 200:
    with open(destination, 'wb') as file:
      file.write(response.content)
    print(f"File downloaded successfully to {destination}")
  else:
    print("Failed to download file")

import json
for item in info:
  regex, line, repository, commitid, path, lineNumber, repoStars = item
  # 查询path对应的id
  id_num = paths_dict[repository+"/"+path]
  # 如果不存在则创建
  if not os.path.exists(str(id_num)):
    os.makedirs(str(id_num))
  else:
    print(f"{id_num} already exists")
    continue
  # example：
  # repository：github.com/kamranahmedse/developer-roadmap	commitid：6cd20bcd83945759023a714a9f3ad7b375f94c98	path：scripts/roadmap-dirs.cjs
  file_addr = f"https://raw.githubusercontent.com/{repository.split('github.com/')[1]}/{commitid}/{path}"
  # download the file
  destination = f"{id_num}/{path.split('/')[-1]}"
  download_file(file_addr, destination)
  # write the info to info.json
  with open(f"{id_num}/info.json", 'w') as f:
    json.dump({
      "repository": repository,
      "commitid": commitid,
      "path": path,
      "lineNumber": lineNumber,
      "repoStars": repoStars
    }, f, indent=4)


