import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TechItem from './TechItem';
import { getTechs } from '../../Actions/techActions';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  React.useEffect(() => {
    getTechs();

    // eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>

        <ul className="collection">
          {!loading &&
            techs &&
            techs.map((tech) => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
