import { connect } from 'react-redux';

import * as Actions from '../store/actions/actions';
import Pictures from './Pictures';

const mapStateToProps = store => ({
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
