import React, { useState } from 'react';

interface TopCreatorsProps {
  data: number;
}

export const TopCreators = (props: TopCreatorsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <h2>{props.data}</h2>
      TopCreators
      <div>
        <button onClick={() => setActiveTab(0)}>Tab 1</button>
        <button onClick={() => setActiveTab(1)}>Tab 2</button>
        {activeTab === 0 ? <section>content 1</section> : <></>}
        {activeTab === 1 && <section>content 2</section>}
      </div>
    </div>
  );
};
