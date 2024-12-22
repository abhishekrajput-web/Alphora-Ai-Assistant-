import React from 'react';

const DocModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>How to Use the AI Assistant</h2>
        <p>Follow these steps to interact with AI assistant:</p>
        
        <div className="doc-step">
          <h3>Step 1: Open any Website</h3>
          <p>To open website, simply say:</p>
          <p><strong>Example:</strong> <code>Open YouTube</code></p>
          <p>This will open the specified website in your browser or mobiles.</p>
        </div>

        <div className="doc-step">
          <h3>Step 2: Search On Web Browser</h3>
          <p>To open website, simply say:</p>
          <p><strong>Example:</strong> <code>Search For javascript</code></p>
          <p>This will open the specified Subject webpage in your browser or mobiles.</p>
        </div>

        <div className="doc-step">
          <h3>Step 3: Ask for Weather By City</h3>
          <p>To ask for weather of a city, say something like:</p>
          <p><strong>Example:</strong> <code>Weather In Mumbai</code></p>
          <p>Alphora will try to retrieve Specific City Weather.</p>
        </div>

        <div className="doc-step">
          <h3>Step 4: Ask Today's Date</h3>
          <p>To Ask Today's Date, try saying:</p>
          <p><strong>Example:</strong> <code>What Is Date</code></p> 
          <p>Alphora will try to retrieve the Today's Date.</p>
        </div>

        <div className="doc-step">
          <h3>Step 5: Search On Youtube Search</h3>
          <p>To Ask Inside Youtube, try saying:</p>
          <p><strong>Example:</strong> <code> search on youtube for html</code></p> 
          <p>Alphora  will Open The Youtube With a Specific Subject.</p>
        </div>

        <div className="doc-step">
          <h3>Step 6: Ask Cureent Time</h3>
          <p>To Ask Current Time, try saying:</p>
          <p><strong>Example:</strong> <code>What Is Time</code></p> 
          <p>Alphora will try to retrieve the Current Time.</p>
        </div>

        <div className="doc-step">
          <h3>Step 7: Ask Anything</h3>
          <p>Depending On Your Question Alphora assistant will Give You The Ouput.</p>
        </div>

        <div className="doc-step">
          <h3>Step 7: Ask Anything</h3>
          <p>Depending On Your Question Alphora assistant will Give You The Ouput.</p>
        </div>

        <div className="doc-step">
          <h3>Important Notes</h3>
          <ul>
            <li>
              The assistant operates in one-way communication during active responses, meaning it cannot be interrupted 
              until it completes the current response. Please wait for the assistant to finish before asking another 
              question.
            </li>
            <li>
              If the app freezes or becomes unresponsive, try refreshing the page to reset it.
            </li>
            <li>
              Ensure your device's microphone and speaker are working properly for the best experience.
            </li>
          </ul>
        </div>
       
        <button onClick={onClose} className="modal-close-button">Close</button>
      </div>
    </div>
  );
};

export default DocModal;
