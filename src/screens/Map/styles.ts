import { StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { height, width } from '../../utills/Dimensions';
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    paddingVertical: height(0.5),
    paddingHorizontal: width(5),
    backgroundColor: AppColors.green,
    position: 'absolute',
    top: height(10),
    right: width(10)
  },
  text: {
    color: AppColors.white
  }
});
export default styles;
