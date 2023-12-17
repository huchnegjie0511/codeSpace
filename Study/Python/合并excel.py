import os
import re
import pandas as pd
from openpyxl import Workbook
from openpyxl.utils.dataframe import dataframe_to_rows

# 文件夹路径
folder_path = r'.'

# 创建一个新的工作簿对象
wb = Workbook()

# 遍历文件夹中的文件
for file_name in os.listdir(folder_path):
    if file_name.endswith('.xlsx') or file_name.endswith('.xls'):  # 确保是Excel文件
        file_path = os.path.join(folder_path, file_name)

        # 读取Excel文件中的所有sheet
        xls = pd.ExcelFile(file_path)
        sheet_names = xls.sheet_names
        
        # 获取工作表名称，去除包含“复试名单”之前的所有内容
        match = re.search(r"复试名单", file_name)
        if match:
            file_sheet_name = file_name[match.start():].replace('.xlsx', '').replace('.xls', '')
        else:
            file_sheet_name = file_name.replace('.xlsx', '').replace('.xls', '')

        # 创建新的sheet，命名为文件名的指定部分
        ws = wb.create_sheet(title=file_sheet_name)
        
        # 遍历每个sheet，并将数据写入新sheet中
        for sheet_name in sheet_names:
            df = pd.read_excel(file_path, sheet_name=sheet_name)
            # 将数据写入工作簿中的新sheet
            for r in dataframe_to_rows(df, index=False, header=True):
                ws.append(r)

# 保存工作簿到文件
output_file = 'combined_sheets.xlsx'
wb.save(output_file)

print(f"处理完成。所有Excel文件的内容已分别保存在 '{output_file}' 中的不同工作表中。")
