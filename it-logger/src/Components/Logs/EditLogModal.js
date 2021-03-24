import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog, clearCurrent } from '../../Actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const modalStyle = {
  width: '75%',
  height: '75%',
};

const EditLogModal = ({ current, updateLog, clearCurrent }) => {
  const [message, setMessage] = React.useState('');
  const [attention, setAttention] = React.useState(false);
  const [tech, setTech] = React.useState('');

  React.useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const handleSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      updateLog({
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      });

      M.toast({ html: `Log updatedby ${tech}` });

      clearCurrent();

      setMessage('');
      setAttention(false);
      setTech('');
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={({ target }) => setMessage(target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={({ target }) => setTech(target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="John Doe">John Doe</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Sara Wilson">Sara Wilson</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={() => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={handleSubmit}
          className="modal-close waves-effect blue btn"
        >
          Enter <i className="material-icons right">send</i>
        </a>
      </div>
    </div>
  );
};

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog, clearCurrent })(
  EditLogModal,
);
