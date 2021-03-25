import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../Actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';
import TechSelectOptions from '../Techs/TechSelectOptions';

const modalStyle = {
  width: '75%',
  height: '75%',
};

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = React.useState('');
  const [attention, setAttention] = React.useState(false);
  const [tech, setTech] = React.useState('');

  const handleSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      addLog({
        message,
        attention,
        tech,
        date: new Date(),
      });

      M.toast({ html: `Log added by ${tech}` });

      // Clear fields
      setMessage('');
      setAttention(false);
      setTech('');
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
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
            <label htmlFor="message" className="active">
              Log Message
            </label>
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
              <TechSelectOptions />
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

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

export default connect(null, { addLog })(AddLogModal);
