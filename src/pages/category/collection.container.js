import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import { selectIsFetching } from '../../redux/shop/shop.selector'
import CollectionPage from './collection.page'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionPageContainer
