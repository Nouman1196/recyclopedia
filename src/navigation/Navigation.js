import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import WasteSearch from '../screens/WasteSearch';
import Results from '../screens/Results/Results';
import AddItems from "../screens/AddItems";
import WebViews from '../screens/WebViews';
import WasteInfo from "../screens/WasteInfo";
import QuickList from '../screens/QuickList';
import Messages from '../screens/Message';
import Information from '../screens/Information';
import AboutRe3 from '../screens/AboutRe3';
import AboutApp from '../screens/AboutApp';
import HowToUse from '../screens/HowToUse';
import Help from '../screens/Help';
import BracknellForest from '../screens/BracknellForest';
import RecyclingCenter from '../screens/RecyclingCenter';
import GardenWaste from '../screens/GardenWaste';
import BulkyMaterial from '../screens/BulkyWaste';
import Reading from '../screens/Reading';
import Wokingham from '../screens/Wokingham';
import BulkyMaterialWoking from '../screens/BulkWasteWoking';
import GardenWasteWoking from '../screens/GardenWasteWoking';
import Theme from '../theme/Theme';
import HeaderRight from '../components/HeaderRight';
import GardenWasteReading from '../screens/GardenWasteReading';
const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Dashboard">
                <Stack.Screen options={({ navigation }) => ({ title: 'Welcome to re3cyclopedia', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="Dashboard" component={Dashboard} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'Waste Search', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="WasteSearch" component={WasteSearch} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'Results', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="Results" component={Results} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'Waste Search', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="AddItems" component={AddItems} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: '', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="WebViews" component={WebViews} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'Local Waste Information', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="WasteInfo" component={WasteInfo} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'Quick Link List', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="QuickList" component={QuickList} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'Messages', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="Messages" component={Messages} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'Information', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="Information" component={Information} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'About Re3', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="AboutRe3" component={AboutRe3} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'About This App', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="AboutApp" component={AboutApp} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'How To Use', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="HowToUse" component={HowToUse} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'Contact Us', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="Help" component={Help} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'Bracknell Forest Council', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="BracknellForest" component={BracknellForest} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'Bracknell Forest', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="RecyclingCenter" component={RecyclingCenter} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'Bracknell Forest Council', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="GardenWaste" component={GardenWaste} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'Bracknell Forest Council', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="BulkyMaterial" component={BulkyMaterial} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'Reading Borough Council', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="Reading" component={Reading} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'Wokingham Borough Council', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="Wokingham" component={Wokingham} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'Wokingham Borough Council', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="BulkyMaterialWoking" component={BulkyMaterialWoking} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'Wokingham Borough Council', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="GardenWasteWoking" component={GardenWasteWoking} />
                <Stack.Screen options={({ navigation }) => ({ headerBackTitle: '', title: 'Reading Borough Council', headerTitleAlign: 'center', headerStyle: Theme.headerStyle, headerTitleStyle: Theme.headerTitleStyle, headerRight: () => <HeaderRight navigation = {navigation}  />, headerTintColor: Theme.headerTintColor})} name="GardenWasteReading" component={GardenWasteReading} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;