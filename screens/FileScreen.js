import React, { useState } from 'react';
import { ScrollView, View, TextInput, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ExpandableBox = ({ name, age, status }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.boxContainer}>
      <TouchableOpacity style={styles.box} onPress={toggleExpand}>
        <View style={styles.optionsContainer}>
          <Image
            source={require('./Image/profile.png')} // مطمئن شوید که این مسیر صحیح است
            style={styles.icon}
          />

          <Text style={styles.text}>مددجو: {name} ({age} ساله)</Text>

          <View style={styles.iconstyleBox}>
            <Ionicons 
              name="chevron-down-outline" 
              size={24} 
              color="black" 
              style={styles.iconstyleb}
            />
          </View>
        </View>

        <View style={styles.optionsContainer}>
          <Text style={styles.text}>وضعیت پرونده: {status}</Text>

          <View style={styles.iconstyleBox}>
            <Ionicons 
              name="chatbox-ellipses-outline" 
              size={24} 
              color="black" 
              style={styles.iconstyleb}
            />
          </View>
        </View>

        <View style={styles.iconboxbottom}>
          <View style={styles.iconstyleBox}>
            <Ionicons 
              name="document-text-outline" 
              size={24} 
              color="black" 
              style={styles.iconstyleb}
            />
          </View>

          <View style={styles.iconstyleBox}>
            <Ionicons 
              name="location-outline" 
              size={24} 
              color="black"
              style={styles.iconstyleb} 
            />
          </View>

          <View style={styles.iconstyleBox}>
            <Ionicons 
              name="people-outline" 
              size={24} 
              color="black" 
              style={styles.iconstyleb}
            />
          </View>

          <View style={styles.iconstyleBox}>
            <Ionicons 
              name="call-outline" 
              size={24} 
              color="black" 
              style={styles.iconstyleb}
            />
          </View>

          <View style={styles.iconstyleBox}>
            <Ionicons 
              name="chatbox-ellipses-outline" 
              size={24} 
              color="black" 
              style={styles.iconstyleb}
            />
          </View>
        </View>
    </TouchableOpacity>

      {expanded && (
        <View style={styles.details}>

          <Text>حامی : آقای رضا فروزان</Text>

          <View style={styles.row2}>
            <Text>مدت تحت پوشش:</Text>
            <Text style={styles.detailDate}>3 سال و 5 ماه</Text>
          </View>

          <View style={styles.row3}>
            <Text>قصه مددجو:</Text>
            <Text style={styles.detailText}>مرد خانواده دچار سکته مغزی شده و کاملاً زمین‌گیر است. او به دلیل این شرایط نیاز به مراقبت مداوم ...</Text>
          </View>

          <View style={styles.row4}>
            <View style={styles.row}>
              <Text style={styles.label}>وضعیت شغلی:</Text>
              <Text style={styles.value}>سرپرست خانواده:</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>کارمند</Text>
              <Text style={styles.value}>بله</Text>
            </View>

            <TouchableOpacity style={styles.link}>
              <Text style={styles.linkText}>مشاهده اطلاعات کامل</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const FileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchBox}>
        <View style={styles.iconBox}>
          <Ionicons style={styles.iconstyle} name="options-outline" size={24} color="black" />
        </View>
  
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder="جستجو..."
            placeholderTextColor="gray"
          />
          <Ionicons style={styles.iconstyle} name="search-outline" size={24} color="black" />
        </View>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.title}>نام مجموعه</Text>
        <Text style={styles.description}>
          تشکیل فرهنگی جهادی محبان اهل بیت علیهم السلام
        </Text>
      </View>

      <ExpandableBox name="علی مرادی" age={29} status="تحقیقات (امیرعباس مرادپور)" />
      <ExpandableBox name="سارا محمدی" age={25} status="در انتظار بررسی (حسین رضایی)" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },

  // searchbox

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    padding: 5,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  search: {
    flex: 1,
    position: 'relative',
    marginLeft: 10, // فاصله از آیکون سمت چپ
  },
  iconstyle: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  input: {
    flex: 1,
    paddingRight: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginRight: 10, // فاصله بین آیکون و متن
  },
  // iconstyle: {
  //   fontSize: 35,
  // },

  // infobox

  infoBox: {
    flexDirection: 'column', // عناصر به صورت ستونی چیده می‌شوند
    alignItems: 'flex-end', 
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: '#FF4700',
    marginTop: 5,
    padding: 15,
    backgroundColor: '#FF47001A',
    borderRadius: 25,
  },


  boxContainer: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderColor: '#ccc',
  },
  box: {
    padding: 10,
    backgroundColor: '#fff',
    margin: 5,
    alignItems: 'flex-end', // چسباندن به سمت راست
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginVertical: 5,
    justifyContent: 'flex-start', // چسباندن به سمت راست
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E2',
    paddingBottom: 20,
  },
  icon: {
    width: 45,
    height: 45,
    marginRight: 10,
    borderRadius: 25,
  },
  text: {
    fontFamily: 'IRANSansWeb', // نام فونت
    fontWeight: '500', // وزن فونت
    fontSize: 14, // اندازه فونت
    lineHeight: 20, // ارتفاع خط
    textAlign: 'right', // راست‌چین
    marginRight: 10,
  },
  iconboxbottom: {
    width: '100%',
    flexDirection: 'row-reverse',        // آیکون‌ها را در یک خط نمایش می‌دهد
    alignItems: 'center',        // تراز عمودی آیکون‌ها
    justifyContent: 'flex-end', // چسباندن به سمت راست
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 15,
  },
  iconstyleBox: {
    width: 30,
    height: 30,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginRight: 10, // فاصله بین آیکون و متن
  },
  iconstyleb: {
    fontSize: 20,
  },
  // box: {
    
    
    
    
    
  // },
  // optionsContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   marginBottom: 10,
  //   borderBottomWidth: 2,
  //   borderBottomColor: '#E0E0E2',
  //   paddingBottom: 5,
  // },
  // icon: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 20,
  // },
  details: {
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    width: '100%',
  },
  row2: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E2',
  },
  row3: {
    flexDirection: 'column',
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E2',
    paddingBottom: 5,
  },
  row4: {
    padding: 15,
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: 'gray',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  detailText: {
    marginTop: 5,
  },
});

export default FileScreen;