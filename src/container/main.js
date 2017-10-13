import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  ScrollView,
  View
} from 'react-native'
import Util from './utils'
import { SearchBar } from 'react-native-elements'
import fuzzy from 'fuzzy'
import Icon from 'react-native-vector-icons/Entypo'

export default class extends Component {
  constructor () {
    super()

    const stateData = {
      AL: 'Alabama',
      AK: 'Alaska',
      AS: 'American Samoa',
      AZ: 'Arizona',
      AR: 'Arkansas',
      CA: 'California',
      CO: 'Colorado',
      CT: 'Connecticut',
      DE: 'Delaware',
      DC: 'District Of Columbia',
      FM: 'Federated States Of Micronesia',
      FL: 'Florida',
      GA: 'Georgia',
      GU: 'Guam',
      HI: 'Hawaii',
      ID: 'Idaho',
      IL: 'Illinois',
      IN: 'Indiana',
      IA: 'Iowa',
      KS: 'Kansas',
      KY: 'Kentucky',
      LA: 'Louisiana',
      ME: 'Maine',
      MH: 'Marshall Islands',
      MD: 'Maryland',
      MA: 'Massachusetts',
      MI: 'Michigan',
      MN: 'Minnesota',
      MS: 'Mississippi',
      MO: 'Missouri',
      MT: 'Montana',
      NE: 'Nebraska',
      NV: 'Nevada',
      NH: 'New Hampshire',
      NJ: 'New Jersey',
      NM: 'New Mexico',
      NY: 'New York',
      NC: 'North Carolina',
      ND: 'North Dakota',
      MP: 'Northern Mariana Islands',
      OH: 'Ohio',
      OK: 'Oklahoma',
      OR: 'Oregon',
      PW: 'Palau',
      PA: 'Pennsylvania',
      PR: 'Puerto Rico',
      RI: 'Rhode Island',
      SC: 'South Carolina',
      SD: 'South Dakota',
      TN: 'Tennessee',
      TX: 'Texas',
      UT: 'Utah',
      VT: 'Vermont',
      VI: 'Virgin Islands',
      VA: 'Virginia',
      WA: 'Washington',
      WV: 'West Virginia',
      WI: 'Wisconsin',
      WY: 'Wyoming'
    }
    this.states = []
    for (let key in stateData) {
      if (stateData.hasOwnProperty(key)) {
        this.states.push(stateData[key])
      }
    }

    this.state = {
      states: this.states
    }
  }

  _onChangeText (text) {
    let results = fuzzy.filter(text, this.states)
    let matches = results.map(function (el) {
      return el.string
    })
    this.setState({
      states: matches
    })
  }

  /*   renderSearchBar = () => {
    return (
      <SearchBar
        ref="searchBar"
        placeholder="Search"
        onChangeText={text => this._onChangeText(text)}
      />
    );
  }; */

  render () {
    const statesList = this.state.states.map(function (elem, index) {
      return (
        <View key={index} style={styles.list}>
          <Text style={styles.text}>
            {elem}
          </Text>
        </View>
      )
    })

    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.back}>
            <Icon name='chevron-left' size={25} />
            <Text style={styles.textHeader}>back</Text>
          </View>
          <Text style={styles.textTitle}>Fuzzy Search</Text>
        </View>
        <SearchBar
          lightTheme
          icon={{ name: 'search' }}
          ref='searchBar'
          placeholder='Search'
          onChangeText={text => this._onChangeText(text)}
        />
        {statesList}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
    // marginTop: 63
  },
  list: {
    height: 40,
    paddingLeft: 20,
    justifyContent: 'center',
    borderBottomColor: '#aaa',
    borderBottomWidth: Util.pixel
  },
  header: {
    flexDirection: 'row',
    paddingTop: 18,
    paddingBottom: 18
  },
  textHeader: {
    fontSize: 18
  },
  textTitle: {
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    paddingRight: 80,
    justifyContent: 'center'
  },
  back: {
    flexDirection: 'row',
    marginLeft: 3,
    flex: 1
  }
})
