import os


def rename_files():

    file_list = os.listdir("/Users/mohammedbamhraz/Documents/Projects/Practing/6/prank")
    print(file_list)
    saved_path = os.getcwd()
    print("current working" + saved_path)
    os.chdir("/Users/mohammedbamhraz/Documents/Projects/Practing/6/prank")


    for file_name in file_list:
        os.rename(file_name,file_name.translate(None,"0123456789"))

    os.chdir(saved_path)



rename_files()
