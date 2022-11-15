import React from 'react';
import { useQuery } from '@apollo/client';

import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';



import { QUERY_MESSAGES } from '../utils/queries';

const Messaging = () => {
  const { loading, data } = useQuery(QUERY_MESSAGES);
  const messages = data?.messages || [];

  

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <MessageForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <MessageList
              messages={messages}
              title="Messages:"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Messaging;
