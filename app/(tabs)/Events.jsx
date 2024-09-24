// EventsList.js
import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import EventCard from '../../components/EventCard';
import { Ionicons } from '@expo/vector-icons';

const eventsData = [
  {
    id: '1',
    name: "Webathon 2.0",
    picture: "https://instagram.fhyd5-1.fna.fbcdn.net/v/t51.29350-15/428002258_607048528270147_7285157165441558079_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYyOTM1MC5kZWZhdWx0X2NvdmVyX2ZyYW1lIn0&_nc_ht=instagram.fhyd5-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=4G94BETs1bsQ7kNvgEe6Mc-&_nc_gid=012ca3764bfa42ed8f98cb9782c1f5f1&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzMwNTE4ODg3NDU3NzE0NTY1OQ%3D%3D.3-ccb7-5&oh=00_AYCyrT0zF91yMOFTAi-JVGmnGC-7r0oMZicP08hWPcSe8A&oe=66F86A17&_nc_sid=22de04", // Add a valid image URL
    date: "2024-02-24",
    description: "A hands-on workshop on building mobile apps using React Native. Learn how to build cross-platform apps with ease!",
    place: "VNR VJIET, Hyderabad"
  },
  {
    id: '2',
    name: "Solution Challenge",
    picture: "https://instagram.fhyd5-1.fna.fbcdn.net/v/t51.29350-15/427511351_1073691980504788_6750140479797703306_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhyd5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=RMLsm9VFP-wQ7kNvgGXsKM5&_nc_gid=012ca3764bfa42ed8f98cb9782c1f5f1&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzMwMzE0NTUyOTIyMjY2MTg4Nw%3D%3D.3-ccb7-5&oh=00_AYBnINRYXoh0eT2xb0cJeb_x5_h9dXgxuO5HiEzsLErpHQ&oe=66F8950B&_nc_sid=22de04", // Add a valid image URL
    date: "2024-02-11",
    description: "Join us for a 24-hour hackathon focused on creating innovative AI solutions. Work with top developers and win exciting prizes!",
    place: "VNR VJIET, Hyderabad"
  },
  {
    id: '3',
    name: "Flutter Workshop",
    picture: "https://instagram.fhyd5-1.fna.fbcdn.net/v/t51.29350-15/409345199_676455994340481_8126726228084827937_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi44OTd4NjI5LnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.fhyd5-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=tbfFnYv3j54Q7kNvgEdLdJc&_nc_gid=c136c51417324a3692433c08d0e8839e&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzI1NDc1MDc1MDI4NDYyNzI2OA%3D%3D.3-ccb7-5&oh=00_AYA_ONOI6UqE3bOiqht5fHeLl5jnutOTLAwxX3JSN_0ypw&oe=66F86AB1&_nc_sid=22de04",
    date: "2024-08-12",
    description: "GDSC VNRVJIET invites you to explore the possibilities of Flutter, regardless of your expertise level. This workshop provides a comprehensive overview of Flutter, Google's UI toolkit for creating natively compiled applications for mobile, web, and desktop.",
    place: "VNR VJIET, Hyderabad"
  },
  {
    id: '4',
    name: "Campus Automation Contest",
    picture: "https://instagram.fhyd5-1.fna.fbcdn.net/v/t51.29350-15/409748965_378678654559954_8929721919972997958_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDEwMTguc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhyd5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=vtcXIaXOc98Q7kNvgHzwhpD&_nc_gid=c136c51417324a3692433c08d0e8839e&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzI1NTIzOTg5NzI3MzMzMzA3MA%3D%3D.3-ccb7-5&oh=00_AYAaIHhbvER0aRxmxB6-501EgC5e11odNlSRKio5mGD3IA&oe=66F888BA&_nc_sid=22de04", // Add a valid image URL" 
    date: "2024-09-19",
    description: "Dive into the ultimate challenge at our Campus automation contest. Join forces with creative minds to tackle real issues on campus, from streamlining schedules to enhancing campus life.",
    place: "VNR VJIET, Hyderabad"
  },
  {
    id: '5',
    name: "Web 3 Guide",
    picture: "https://instagram.fhyd5-1.fna.fbcdn.net/v/t51.29350-15/408791016_1569645207109153_7373010505481004472_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDEwMTguc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhyd5-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=EjkelVO5zJ8Q7kNvgHuxTo8&_nc_gid=c136c51417324a3692433c08d0e8839e&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzI1MzkwMTMwMTI1NzcwMzQwMA%3D%3D.3-ccb7-5&oh=00_AYCm2IIBdcaoDES_b1JWNWenoCsJoRmAsTHeehTQGC38Vg&oe=66F88BA7&_nc_sid=22de04", 
    date: "2024-02-11",
    description: "Social3 is the first ever Web3 based social hiring platform. A decentralized 'LinkedIn' connecting web3 professionals.",
    place: "VNR VJIET, Hyderabad"
  }
];

const EventsList = () => {
  const renderEvent = ({ item }) => <EventCard event={item} />;
  //headers shown true 
  const renderHeader = () => <Text style={styles.header}>Events</Text>;
  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        data={eventsData}
        renderItem={renderEvent}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 60,
  },
});

export default EventsList;
