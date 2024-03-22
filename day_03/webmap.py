import folium
import pandas

data = pandas.read_excel("iit_data.xlsx", encoding = "unicode_escape")

iit_ranking = list(data["IIT Ranking"])
college_name = list(data["IIT College"])
Nirf_score = list(data["NIRF Score"])
lat = list(data["Longitude"])
lon = list(data["Longitude"])
pic = list(data["Image"])

#parent map
fg = folium.FeatureGroup("map")
fg.add_child(folium.GeoJson(data =(open("india_states.json", "r", encoding="utf-8-sig").read())))
#utf means unicode Transformation Format
#8 is for 8 bit
#sig means signature
#we use this treats file as a BOM transformation instead of a string

#html code to use our dataset

for rank, name, lati, longi, img in zip(iit_ranking, college_name, Nirf_score, lat, lon, pic):
  fg.add_child(folium.Marker(Location=[lati, longi], popup= "<b>College Name : <b>"+str(name)+ "<br> <b>NIRF Score : </b>"+ str(score)+ "<br> <b>img src"+ima+"height = 145, width = 300>", icon = folium.Icon(color="red")))
map = folium.Map(Location =[20.0000,75.0000],zoom_start=4)
#latitude and longitude you open which location it will be visible

map.add_child(fg)
map.save("sample.html")
