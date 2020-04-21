import { NavigationActions } from 'react-navigation'
import { CommonActions } from '@react-navigation/native';

let navigator;

export const setNavigator = (nav) =>{
    navigator = nav
}

export const navigate = (routeName,params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
        })
      
    )
    // navigation.dispatch(
    //     CommonActions.navigate({
    //       name: 'TrackList',
          
    //     })
    //   );
}
// import { CommonActions } from '@react-navigation/native';

// navigation.dispatch(
//   CommonActions.navigate({
//     name: 'Profile',
//     params: {
//       user: 'jane',
//     },
//   })
// );