import './PatientCard.css';

import React, { FC, useEffect, useState } from 'react';
import { Button, Col, List, Modal, Row, Tooltip } from 'antd';

import {
  DragOutlined,
  PauseOutlined,
  UserDeleteOutlined,
  LikeOutlined,
  SkinOutlined,
  DotChartOutlined,
  SettingOutlined,
  LineChartOutlined,
  EnterOutlined,
} from '@ant-design/icons';
import { IPatient } from '../../interfaces/Session';
import { useSessionContext } from '../../context/SessionContext';
import PositionModal from './Modals/PositionModal';
import HandModal from './Modals/HandModal';
import { IKRigModal } from './Modals/IKRigModal';
import PatientCoord from './Modals/PatientCoord';
import PatientInfoModal from './Modals/PatientInfoModal';
import RepModal from './Modals/RepModal';
import { useNavigate } from 'react-router-dom';
import UserContext, { useUserContext } from 'renderer/context/UserContext';
import { useSocketContext } from 'renderer/context/SocketContext';

export interface IPatientCard {
  patient: IPatient;
  patientGame: any;
}

export const PatientCard: FC<IPatientCard> = ({
  patient,
  patientGame,
}: IPatientCard) => {
  const history = useNavigate();
  const session = useSessionContext();
  const socketContext = useSocketContext();
  const [showHandModal, setShowHandModal] = useState(false);
  const [showPositionalModal, setShowPositionalModal] = useState(false);
  const [showIKRig, setShowIKRig] = useState(false);
  const sessionContext = useSessionContext();
  const [isMirror, setIsMirror] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [currentGame, setCurrentGame] = useState('0');
  const [showPatientCord, setShowPatientCord] = useState(false);
  const [showPatientRep, setShowPatientRep] = useState(false);
  const [viewPatientModal, setViewPatientModal] = useState(false);

  const handlePatientPauseGame = () => {
    if (isPaused) {
      socketContext.resumeGame(patient);
    } else {
      socketContext.pauseGame(patient);
    }
    setIsPaused(!isPaused);
  };

  const handleShowHand = () => {
    setCurrentGame(sessionContext.getCurrentGame());
    setShowHandModal(true);
  };

  useEffect(() => {
    console.log(patient);
  }, []);

  return (
    <List.Item className="patient-card">
      {/* Positioning Modal */}
      <Modal
        visible={showPositionalModal}
        bodyStyle={{
          height: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        style={{ minWidth: '75vw' }}
        footer={
          <Button
            style={{
              backgroundColor: '#1890FF',
              color: '#fff',
              borderRadius: '15px',
            }}
            onClick={() => setShowPositionalModal(false)}
          >
            Close
          </Button>
        }
        closable={false}
        centered
      >
        <PositionModal patient={patient} />
      </Modal>
      {/* Hand Modals */}
      <Modal
        visible={showHandModal}
        bodyStyle={{
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        footer={
          <Button
            style={{
              backgroundColor: '#1890FF',
              color: '#fff',
              borderRadius: '15px',
            }}
            onClick={() => setShowHandModal(false)}
          >
            Close
          </Button>
        }
        closable={false}
        centered
      >
        <HandModal patient={patient} />
      </Modal>
      {/* IK Rig Modal */}
      <Modal
        visible={showIKRig}
        bodyStyle={{
          height: '250px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflowX: 'scroll',
          margin: 'auto',
        }}
        style={{ minWidth: '75vw' }}
        footer={
          <Button
            style={{
              backgroundColor: '#1890FF',
              color: '#fff',
              borderRadius: '15px',
            }}
            onClick={() => setShowIKRig(false)}
          >
            Close
          </Button>
        }
        closable={false}
        centered
      >
        <IKRigModal patient={patient} />
      </Modal>
      {/* Patient Positional Data */}
      <Modal
        visible={showPatientCord}
        onCancel={() => setShowPatientCord(false)}
        onOk={() => setShowPatientCord(false)}
        bodyStyle={{
          maxHeight: '65vh',
          overflowY: 'scroll',
          flexDirection: 'column-reverse',
        }}
        centered
        cancelText="Close"
        okText="Save Data"
      >
        <PatientCoord patient={patient} />
      </Modal>
      {/* Patient Rep Data */}
      <Modal
        open={showPatientRep}
        onCancel={() => setShowPatientRep(false)}
        bodyStyle={{
          maxHeight: '65vh',
          overflowY: 'scroll',
          flexDirection: 'column-reverse',
        }}
        centered
        cancelText="Close"
        okText="Save Data"
      >
        <RepModal patient={patient} />
      </Modal>
      {/* Patient Options */}
      <Row
        style={{
          width: '100vw',
          justifyContent: 'space-between',
          padding: '0 2rem',
        }}
      >
        <Col style={{}}>
          {patient.name}
          <Tooltip title="Enter Patient" placement="top">
            <Button
              style={{ margin: '0 2rem' }}
              icon={<EnterOutlined />}
              disabled
              onClick={() =>
                history(
                  `/session/${session.currentSession?.sessionKey}/patient/${patient.name}/${patient.socketId}`
                )
              }
            />
          </Tooltip>
        </Col>
        {patientGame === '0' ? (
          <p
            style={{ textAlign: 'center', margin: 'auto', color: 'lightgray' }}
          >
            Select Game To Show Player Settings
          </p>
        ) : (
          <>
            <Col style={{}}>
              <Tooltip title="Update Position" placement="top">
                <Button
                  style={{ marginRight: 10 }}
                  icon={<DragOutlined />}
                  onClick={() => setShowPositionalModal(true)}
                />
              </Tooltip>
              <Tooltip title="Pause Game" placement="top">
                <Button
                  style={{ marginRight: 10 }}
                  icon={<PauseOutlined />}
                  onClick={handlePatientPauseGame}
                  danger={!isPaused}
                />
              </Tooltip>
              <Tooltip title="Hand" placement="top">
                <Button
                  style={{ marginRight: 10 }}
                  icon={<LikeOutlined />}
                  onClick={handleShowHand}
                  danger={isMirror}
                />
              </Tooltip>
              <Tooltip title="IK Rig Settings" placement="top">
                <Button
                  style={{ marginRight: 10 }}
                  icon={<SkinOutlined />}
                  onClick={() => setShowIKRig(true)}
                />
              </Tooltip>
              <Tooltip title="Patients Cord." placement="top">
                <Button
                  style={{ marginRight: 10 }}
                  icon={<DotChartOutlined />}
                  onClick={() => setShowPatientCord(true)}
                />
              </Tooltip>
              <Tooltip title="Patients Rep." placement="right">
                <Button
                  style={{ marginRight: 10 }}
                  icon={<LineChartOutlined />}
                  onClick={() => setShowPatientRep(true)}
                />
              </Tooltip>
            </Col>
          </>
        )}
        <Col style={{}}>
          <Modal
            visible={viewPatientModal}
            style={{ minWidth: '75vw' }}
            footer={
              <Button
                style={{
                  backgroundColor: '#1890FF',
                  color: '#fff',
                  borderRadius: '15px',
                }}
                onClick={() => setViewPatientModal(false)}
              >
                Close
              </Button>
            }
            closable={false}
            centered
          >
            <PatientInfoModal patient={patient} />
          </Modal>
          <Tooltip title="Kick Patient" placement="right">
            <Button
              icon={<UserDeleteOutlined />}
              danger
              onClick={() =>
                sessionContext.deletePatientFromSession(patient.name)
              }
              style={{ marginLeft: 10 }}
            />
          </Tooltip>
        </Col>
      </Row>
    </List.Item>
  );
};