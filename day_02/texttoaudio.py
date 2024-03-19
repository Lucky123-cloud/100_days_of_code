from gtts import gTTS #this module is imported to be for text to speech conversion
import os


#if you want to read it from another file here is the approach
abc = open("about.txt")
text = abc.read() #the text you want to be converted to speech

language = "en" # en is for english

obj = gTTS(text = text,lang=language,slow=False)
#we have used slow = false becuase our converted video will be slow
obj.save("sample.mp3")

#to open the video file automatically we have to import os
os.system("sample.mp3")

