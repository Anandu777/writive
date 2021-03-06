import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { othersProfile } from '../../store/actions/profile'
import { setExpanded } from '../../store/actions/navigation'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from '../spinner/Spinner'

const OthersProfile = ({
   othersProfile,
   loading,
   profile,
   expanded,
   setExpanded,
   match,
}) => {
   const history = useHistory()

   useEffect(() => {
      othersProfile(match.params.user_id, history)
   }, [othersProfile])

   return (
      <Fragment>
         {loading || !profile ? (
            <Spinner />
         ) : (
            <Container
               className='OthersProfile d-flex flex-column'
               onClick={() => {
                  if (expanded) {
                     setExpanded(false)
                  }
               }}
            >
               <Row>
                  <Col>
                     <h2 className='text-primary text-center font-weight-bold'>
                        PROFILE
                     </h2>
                     <hr className='mt-1 mb-5' />
                  </Col>
               </Row>
               <Row>
                  <Col>
                     <div>
                        <img
                           className='OthersProfile__image mx-auto'
                           src={profile.photo}
                           alt='profileImage'
                        />
                     </div>
                  </Col>
               </Row>
               <Row className='mt-3'>
                  <Col>
                     <div>
                        <h4 className='mb-0 text-primary'>Name</h4>
                        <p className='mb-0 '>{profile.user.name}</p>
                     </div>
                  </Col>
               </Row>
               <hr className='mt-1' />
               <Row>
                  <Col>
                     <div>
                        <h4 className='mb-0 text-primary'>Bio</h4>
                        <p className='mb-0 '>
                           {profile.bio ? profile.bio : 'Bio not updated'}
                        </p>
                     </div>
                  </Col>
               </Row>
               <hr className='mt-1' />
               <Row>
                  <Col>
                     <div>
                        <h4 className='mb-0 text-primary'>Status</h4>
                        <p className='mb-0 '>
                           {profile.status
                              ? profile.status
                              : 'Status not updated'}
                        </p>
                     </div>
                  </Col>
               </Row>
               <hr className='mt-1' />
               <Row>
                  <Col>
                     <div>
                        <h4 className='mb-0 text-primary'>Location</h4>
                        <p className='mb-0 '>
                           {profile.location
                              ? profile.location
                              : 'Location not updated'}
                        </p>
                     </div>
                  </Col>
               </Row>
            </Container>
         )}
      </Fragment>
   )
}

OthersProfile.propTypes = {
   othersProfile: PropTypes.func.isRequired,
   profile: PropTypes.object,
   loading: PropTypes.bool.isRequired,
   setExpanded: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
   profile: state.profile.profile,
   loading: state.profile.loading,
   expanded: state.navigation.expanded,
})

export default connect(mapStateToProps, { othersProfile, setExpanded })(
   OthersProfile
)
