import * as Actions from '../store/actions/actions';

import Pictures from './Pictures.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  ...store.Reducer
});

const mapDispatchToProps = {
  loadPicturesAction: Actions.loadPicturesAction,
  updatePictureRate: Actions.updatePictureRate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pictures);
