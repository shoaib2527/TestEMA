import { StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { height, width } from '../../utills/Dimensions';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: AppColors.white,
    paddingBottom: height(2)
  },
  image: {
    height: height(35),
    width: width(100),
    paddingTop: height(6)
  },
  cityName: {
    fontSize: width(6),
    fontWeight: 'bold',
    color: AppColors.white,
    alignSelf: 'center',
  },
  row: {
    width: width(80),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height(1)
  },
  label: {
    color: AppColors.white,
    fontSize: width(4),
    fontWeight: 'bold'
  },
  value: {
    color: AppColors.white,
    fontSize: width(4),
    fontWeight: 'bold'
  },
});
export default styles;
