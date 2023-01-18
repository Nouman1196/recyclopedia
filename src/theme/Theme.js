import Color from "./Colors";
import { StyleSheet, Platform, Dimensions } from 'react-native';
import { WP, HP } from './responsive';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const { height, width } = Dimensions.get('window')

const sideMargin = 15
const Theme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    },
    withoutFlexContainer: {
        flex: 1
    },
    //header style
    headerStyle: {
        backgroundColor: Color.black
    },
    headerTitleStyle: {
        color: Color.white,
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    headerTintColor: Color.white,
    headerIconSize: 24,

    //Dashboard
    recyclopediaImageContainer: {
        padding: sideMargin
    },
    recylopediaImage: {
        height: width / 6,
        width: '100%'
    },
    topHorizontalColumnWrapperStyle: {
        justifyContent: 'space-between'
    },
    topHorizontalContentContainerStyle: {
        margin: sideMargin
    },
    topHorizontalImage: {
        height: width / 4,
        width: width / 3.4
    },
    buttonColumnWrapperStyle: {
        justifyContent: 'space-between',
        marginBottom: 10
    },
    buttonContentContainer: {
        margin: sideMargin,
        flex: 1,
        justifyContent: 'center'
    },
    buttonContentContainerWithoutFlex: {
        margin: sideMargin,
        justifyContent: 'center'
    },
    buttonTouchableOpacity: {
        flex: 1,
        alignItems: 'center'
    },
    buttonImage: {
        height: width / 4.5,
        width: width / 4.5
    },
    buttonText: {
        color: Color.black,
        marginTop: 5,
        textAlign: 'center',
        marginHorizontal: sideMargin
    },

    //BottomButtons
    bottomButtonImage: {
        height: width / 4.2,
        width: width / 4.2
    },
    //waste search
    searchByText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: sideMargin
    },
    selectButtonContainer: {
        flex: 1,
        borderRadius: 30,
        alignItems: 'center',
    },
    selectBtnText: {
        color: Color.white,
        fontSize: 16,
        includeFontPadding: false,
        padding: 12
    },
    inputFieldsContainer: {
        marginHorizontal: sideMargin,
        flex: 1
    },
    textInputContainerStyle: {
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        paddingVertical: 10,
        flex: 1,
        marginLeft: 3,
    },
    inputContainerStyle: {
        marginTop: sideMargin
    },
    suggestionContainer: {
        zIndex: 1
    },
    activityIndicator: {
        zIndex: 1,
        position: 'absolute',
        width: '100%',
        top: 0,
        height: 50
    },
    suggestionListContainer: {
        zIndex: 1,
        position: 'absolute',
        width: '100%',
        top: 0,
        maxHeight: height / 4.5,
        marginTop: 2,
        borderRadius: 5,
        backgroundColor: Color.lightGray
    },
    suggestionListTouchableOpacity: {
        padding: 10,
        borderColor: Color.transparent,
        borderBottomColor: Color.grey,
        borderWidth: 1
    },
    suggestionListText: {
        color: Color.black,
        fontWeight: 'bold'
    },
    noSuggestionContainer: {
        zIndex: 1,
        position: 'absolute',
        width: '100%',
        top: 0,
        marginVertical: 1,
        borderRadius: 5,
        backgroundColor: Color.lightGray,
        padding: 10,
        alignItems: 'center',
        borderColor: Color.transparent,
        borderBottomColor: Color.grey,
        borderWidth: 1
    },
    barCodeContainer: {
        justifyContent: 'center',
        height: height / 1.5
    },
    cameraStyle: {
        flex: 1
    },
    barCodeHeight: height / 2,
    searchButtonContainer: {
        backgroundColor: Color.green,
        borderRadius: 30,
        alignItems: 'center',
        marginHorizontal: 50,
        marginTop: 40,
        zIndex: -1
    },
    searchBtnText: {
        color: Color.white,
        fontSize: 16,
        includeFontPadding: false,
        padding: 12,
        fontWeight: 'bold'
    },

    //no Records found
    noRecordsFoundContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center'
    },
    noRecordsInnerContainer: {
        backgroundColor: Color.white,
        margin: sideMargin,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 10,
        alignItems: 'center'
    },
    noRecordFoundText: {
        fontWeight: 'bold',
        color: Color.black
    },
    sorryText: {
        margin: 10
    },
    noRecordsButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    noRecordsInnerButtonContainerMg: {
        backgroundColor: Color.green,
        padding: 10,
        borderRadius: 5,
        marginRight: 10
    },
    noRecordsInnerButtonContainer: {
        backgroundColor: Color.grey,
        padding: 10,
        borderRadius: 5
    },
    noRecordButtonText: {
        color: Color.white
    },

    //results
    mapMainContainer: {
        flex: 1
    },
    mapStyle: {
        flex: 1
    },
    mapViewCallout: {
        minWidth: 140,
        borderRadius: 20,
        backgroundColor: Color.yellow
    },
    mapViewCalloutTouchableOpacity: {
        backgroundColor: Color.white,
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    mapViewCalloutHeading: {
        fontWeight: "bold",
        fontSize: 15
    },
    mapViewCalloutDetailsText: {
        fontSize: 12
    },
    mapViewCalloutDetailsTextMargin: {
        fontSize: 12,
        marginBottom: 7
    },
    resultsSuggestionContainer: {
        position: "absolute",
        top: 10,
        right: 0,
        padding: 10,
        backgroundColor: Color.whiteSmoke
    },
    resultsSuggestionInnerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    resultsSuggestionText: {
        width: width / 2.2
    },
    resultsSuggestionCrossBtn: {
        color: Color.red,
        fontSize: 12
    },
    resultsDetailedContainer: {
        flex: 1.5,
        margin: sideMargin
    },
    resultsDetailedInnerContainer: {
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    resultsDetailedName: {
        fontSize: 15,
        color: Color.black,
        fontWeight: "bold"
    },
    resultsDetailedListContainer: {
        marginTop: 10
    },
    resultsDetailedListInnerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    resultsDetailedInner: {
        flex:1
    },
    resultsDetailedListHeading: {
        fontSize: 14,
        color: Color.black,
        fontWeight: "bold"
    },
    resultsDetailedListDetails: {
        fontSize: 12,
        color: Color.black
    },
    resultsDetailedBin: {
        // height: height / 22,
        // width: height / 22
        height: 60, width: 60
    },
    resultsFurtherInfoContainer: {
        backgroundColor: "#ddd",
        padding: 8,
        borderRadius: 5,
        marginVertical: 5
    },
    googleMapBtnContainer: {
        backgroundColor: Color.green,
        alignSelf: "flex-end",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 4,
        alignItems: "center"
    },
    googleMapBtnText: {
        fontSize: 11,
        color: Color.white
    },

    // WasteInfo
    wasteInfoInnerContainer: {
        alignItems: 'center'
    },
    wasteInfoText: {
        color: Color.black,
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 10,
        textAlign: 'center'
    },
    wasteinfoDesText: {
        color: Color.grey,
        fontWeight: 'bold',
        fontSize: 16
    },
    wasteInfoCenterView: {
        margin: sideMargin,
        alignItems: 'center'
    },
    wasteInfoImage: {
        height: height / 4,
        width: height / 3.6
    },

    //quickList
    quickListContentContainer: {
        margin: sideMargin
    },
    quickListInnerContainer: {
        backgroundColor: Color.black,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    quickListImageContainer: {
        borderEndColor: Color.disableGrey,
        borderColor: Color.transparent,
        borderWidth: 1
    },
    quickListImages: {
        height: height / 20,
        width: height / 20
    },
    quickListTitle: {
        color: Color.white,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1
    },
    quickListDetailedContainer: {
        marginBottom: 10
    },
    quickListDetailedText: {
        color: Color.black,
        fontWeight: 'bold'
    },

    //messages
    noMessagesText: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: sideMargin
    },

    //about Re3
    re3Image: {
        height: height / 8,
        width: height / 8,
        alignSelf: 'center',
        marginBottom: 10
    },
    detailedTextContainer: {
        marginHorizontal: sideMargin
    },
    detailedHeadingText: {
        fontWeight: "bold",
        fontSize: 23
    },
    detailedHeadingTextCenter: {
        fontWeight: "bold",
        fontSize: 23,
        textAlign: 'center'
    },
    detailedText: {
        marginTop: 15,
        textAlign: "justify",
        fontSize: 16
    },

    //about app
    aboutAppDetailedContainer: {
        margin: sideMargin
    },

    yellowButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.orange,
        padding: 15,
        borderRadius: 10,
        marginVertical: 15
    },
    yellowButtonTitle: {
        color: Color.white,
        fontWeight: 'bold',
        fontSize: 22,
        flex: 1
    },

    //bracknell forest
    bracknellForestImage: {
        height: width / 4,
        width: width / 3.2,
        alignSelf: 'center'
    },
    scrollViewMargin: {
        margin: 15
    },
    recyclicCenterPic: {
        height: height / 4,
        width: width,
        alignSelf: 'center',
        marginVertical: 10
    }

});
export default Theme;