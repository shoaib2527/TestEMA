import { StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { height, width } from '../../utills/Dimensions';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    alignItems: 'center'
  },
  headerContainer: {
    backgroundColor: AppColors.white,
    width: width(100),
    height: height(12),
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: height(1.5),
    borderBottomLeftRadius: width(5),
    borderBottomRightRadius: width(5)
  },
  heading: {
    color: AppColors.black,
    fontWeight: 'bold',
    fontSize: width(6)
  },
  cityContainer: {
    width: width(70),
    alignSelf: 'center',
    backgroundColor: AppColors.white,
    marginTop: height(1),
    paddingVertical: height(1),
    paddingLeft: width(8),
    borderRadius: width(5)
  },
  cityName: {
    fontSize: width(4),
    fontWeight: 'bold',
    color: AppColors.black
  }
});
export default styles;
