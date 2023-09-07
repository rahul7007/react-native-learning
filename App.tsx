/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import RollTheDice from './componentaFour/RollTheDice';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import FlatCard from './components/FlatCard';
import CurrencyConverter from './componentsFour/CurrencyCOnverter';
import BgColChanger from './componentsThree/BgColChanger';
import FormValidation from './componentsTwo/FormValidation';
import FirstComp from './FirstComp';

const App = () => {
  return(
    // <FirstComp />

    // <SafeAreaView style={{backgroundColor:'#F5F7FB'}}>
    // <ScrollView>
    //     <FlatCard />
    //     <ElevatedCard />
    //     <FancyCard />
    //     <ActionCard />
    //     <ContactList />
    //   </ScrollView>
    // </SafeAreaView>

    // <FormValidation />

    // <BgColChanger />

    // <RollTheDice />

    <CurrencyConverter />
  )
}



export default App;
