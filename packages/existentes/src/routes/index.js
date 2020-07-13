import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

export default function Routes() {
  return (
    <Switch>
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
    </Switch>
  );
}