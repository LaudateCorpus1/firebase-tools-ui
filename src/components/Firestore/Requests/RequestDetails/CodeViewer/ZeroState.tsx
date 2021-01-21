/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import './ZeroState.scss';

import { Typography } from '@rmwc/typography';
import React from 'react';

export const ZERO_STATE_MESSAGE = 'No Firestore rules were provided';

const CodeViewerZeroState: React.FC = () => {
  return (
    <div className="Firestore-Requests-Details-Code-Zero-State-Container">
      <Typography
        use="body2"
        theme="textSecondaryOnBackground"
        className="Firestore-Requests-Details-Code-Zero-State-Message"
      >
        {ZERO_STATE_MESSAGE}
      </Typography>
    </div>
  );
};

export default CodeViewerZeroState;
