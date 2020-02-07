/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Switch,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// onPress = () => {

//   count+=1

// }
const App: () => React$Node = () => {

  const [value, setValue] = useState(false);
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);
  const [value4, setValue4] = useState(false);
  const [value5, setValue5] = useState(false);
  const [value6, setValue6] = useState(false);
  const [value7, setValue7] = useState(false);

  const [days, onChangeText] = React.useState();
  let prevDay = [];


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={{ ...styles.body, paddingBottom: 90, }}>
            <View style={styles.sectionContainer}>
              <Text style={{ ...styles.sectionTitle, color: 'teal', alignItems: 'center', justifyContent: 'center', paddingBottom: 66 }}>Tech Test INDRA</Text>
              <Text style={{ ...styles.sectionDescription, paddingBottom: 50 }}>
                Choose the 8 states
              </Text>
            </View>


            <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20, paddingBottom: 66 }}>
              <Switch
                value={value}
                onValueChange={v => {
                  setValue(v);
                }}
              />
              <Switch
                value={value1}
                onValueChange={v => {
                  setValue1(v);
                }}
              />
              <Switch
                value={value2}
                onValueChange={v => {
                  setValue2(v);
                }}
              />
              <Switch
                value={value3}
                onValueChange={v => {
                  setValue3(v);
                }}
              />
              <Switch
                value={value4}
                onValueChange={v => {
                  setValue4(v);
                }}
              />
              <Switch
                value={value5}
                onValueChange={v => {
                  setValue5(v);
                }}
              />
              <Switch
                value={value6}
                onValueChange={v => {
                  setValue6(v);
                }}
              />
              <Switch
                value={value7}
                onValueChange={v => {
                  setValue7(v);
                }}
              />
            </View>
            <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ marginRight: 20 }}>
                # of Days
              </Text>
              <View style={{ width: 60 }}>

                <TextInput
                  style={{
                    flex: 1,
                    // padding: 5,
                    // textAlignVertical: 'top'
                    borderWidth: 2,
                    borderColor: 'teal',
                    // marginRight: 200,
                    borderRadius: 10,
                    paddingLeft: 25,

                  }}
                  keyboardType='numeric'
                  onChangeText={text => onChangeText(text)}
                  value={days}
                />
              </View>
            </View>

            <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 66 }}>
              <View style={styles.container}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{ ...styles.button, justifyContent: 'center', alignItems: 'center' }}
                  onPress={() => {
                    prevDay = [];
                    prevDay.push(false);
                    prevDay.push(value);
                    prevDay.push(value1);
                    prevDay.push(value2);
                    prevDay.push(value3);
                    prevDay.push(value4);
                    prevDay.push(value5);
                    prevDay.push(value6);
                    prevDay.push(value7);
                    prevDay.push(false);

                    for (let loop = 0; loop < days; loop++) {
                      let nextDay = [];
                      nextDay.push(false);
                      for (let i = 1; i < 9; i++) {
                          if ((prevDay[i - 1] == false && prevDay[i + 1] == false) ||  (prevDay[i - 1] == true && prevDay[i + 1] == true)){

                          nextDay.push(false)
                        } else {
                          nextDay.push(true);
                        }
                      }
                      nextDay.push(false);
                      prevDay = nextDay;
                    }

                    prevDay.pop();
                    prevDay.splice(0, 1);

                    alert('Answer   :   ' + (prevDay[0] ? '1' : '0') + ' | ' + (prevDay[1] ? '1' : '0')+ ' | ' + (prevDay[2] ? '1' : '0')+ ' | ' + (prevDay[3] ? '1' : '0')+ ' | ' + (prevDay[4] ? '1' : '0')+ ' | ' + (prevDay[5] ? '1' : '0')+ ' | ' + (prevDay[6] ? '1' : '0')+ ' | ' + (prevDay[7] ? '1' : '0'));


                  }}>
                  <Text style={{ justifyContent: 'center', alignItems: 'center' }}>Calculate</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>

          <View style={{ ...styles.sectionContainer }}>
            <Text style={styles.sectionTitle}>DoneBy </Text>
            <Text style={{ color: 'teal', marginTop: 10, fontSize: 16}}>
            Daniel Alejandro Salgado
            </Text>
            <Text style={{ color: 'teal', marginTop: 10, fontSize: 16}}>
            Full Stack Developer
            </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    height: window.height
  },



  button: {

    height: 40,
    width: 160,
    borderRadius: 10,
    // backgroundColor : "teal",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'teal',
  },


  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
