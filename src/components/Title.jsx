import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <h1 className='amiibfo'> {title} </h1>
  )
}

Title.defaultProps = {
  title: 'AMIIBFO'
}

Title.propTypes = {
  title: PropTypes.string,
}

export default Title