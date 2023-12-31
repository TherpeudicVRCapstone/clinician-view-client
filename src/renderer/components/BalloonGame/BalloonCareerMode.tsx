import { Button, Checkbox, Col, Divider, Input, Modal, Row, Tooltip } from "antd";
import { FC, useState } from "react";
import { useSessionContext } from "renderer/context/SessionContext";
import {StaticBallooonProgress} from "renderer/context/SocketContext";
import { IBalloonSettingsPage } from "./BalloonGameSettings";
import { BalloonSettingsStatic, useSocketContext } from "renderer/context/SocketContext";

export const BalloonCareerMode: FC<IBalloonSettingsPage> = ({
  patient
}) =>{

  const socketContext = useSocketContext();


  const startCareerLevel = async (level: string) =>{
    BalloonSettingsStatic.balloonSettings.level = level;
    socketContext.setHand("2");
    socketContext.setGameIsRunning(true);
    BalloonSettingsStatic.balloonSettings.hand = "2";
      await sessionContext.startGame(sessionContext.currentSession?.sessionKey)
   //  sessionContext.sendBalloonGameSettings(sessionContext.currentSession?.sessionKey)
      socketContext.sendBalloonGameSettings(patient);

  }

    const sessionContext = useSessionContext();
      return(<div className="session-screen">
              <Divider orientation='center'  style={{border:'10px'}} >
          Career Mode
        </Divider>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          padding: '10px',
          height: '10%'
          }}>
        <Col
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: "300px"
            }}>
          <span><b><u>Level</u></b></span>
          <span></span>
          <span></span>
          <span><b><u>Score</u></b></span>
          <span></span>
          <span><b><u>Play Button</u></b></span>
        </Col>
        
        <Col
          style={{
            display: 'flex',
            marginLeft:"15%",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
              <span><b><u>Achievements</u></b></span>
        </Col>
      </Row>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          padding: '10px',
          height: '10%'
          }}>
            
        <Col
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: "280px"
            }}>
          <span>Level One: </span>
          <span>{socketContext.balloonInfo.levelOneScore} / 3</span>
          <Button onClick={ () =>{
            startCareerLevel("0");
          }


          }>Play</Button>
        </Col>
        <Col
          style={{
            display: 'flex',
            marginLeft:"17%",
            width:"175px",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
              <Tooltip  color={"rgba(14,118,254,1)"} mouseLeaveDelay={0} title="Pop your first normal ballon" placement="topLeft">
                  <span><b><u>Welcome to the Game!</u></b></span>
              </Tooltip>
        </Col>
        <Col
          style={{
            display: 'flex',
            marginLeft:"2%",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
              <Checkbox disabled checked={StaticBallooonProgress.balloonInfo.ach0}></Checkbox>
        </Col>
        <Col
          style={{
            display: 'flex',
            marginLeft:"5%",
            width:"175px",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
              <Tooltip  color={"rgba(14,118,254,1)"} mouseLeaveDelay={0} title="Pop every type of special balloon" placement="topLeft">
                  <span><b><u>Well Versed</u></b></span>
              </Tooltip>
        </Col>
        <Col
          style={{
            display: 'flex',
            marginLeft:"1%",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
              <Checkbox disabled checked={StaticBallooonProgress.balloonInfo.ach5}></Checkbox>
        </Col>
      </Row>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          padding: '10px',
          height: '10%'
          }}>
        <Col
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: "280px"
            }}>
          <span>Level Two: </span>
          <span>{socketContext.balloonInfo.levelTwoScore} / 3</span>
          <Button onClick={ () =>{
            startCareerLevel("1");
          }
          }>Play</Button>
        </Col>
        <Col
          style={{
            display: 'flex',
            marginLeft:"17%",
            width:"175px",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
              <Tooltip  color={"rgba(14,118,254,1)"} mouseLeaveDelay={0} title="Fully pop a balloon stream" placement="topLeft">
                  <span><b><u>Go with the Flow</u></b></span>
              </Tooltip>
        </Col>
        <Col
          style={{
            display: 'flex',
            marginLeft:"2%",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
              <Checkbox disabled checked={StaticBallooonProgress.balloonInfo.ach1}></Checkbox>
        </Col>
        <Col
          style={{
            display: 'flex',
            marginLeft:"5%",
            width:"175px",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
                 <Tooltip  color={"rgba(14,118,254,1)"} mouseLeaveDelay={0} title="Finish a game with more lives than you started with" placement="topLeft">
                  <span><b><u>Overachiever</u></b></span>
              </Tooltip>
        </Col>
        <Col
          style={{
            display: 'flex',
            marginLeft:"1%",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
              <Checkbox disabled checked={StaticBallooonProgress.balloonInfo.ach6}></Checkbox>
        </Col>
      </Row>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          padding: '10px',
          height: '10%'
          }}>
        <Col
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: "280px",
            }}>
          <span>Level Three:</span>
          <span>{socketContext.balloonInfo.levelThreeScore} / 3</span>
          <Button onClick={ () =>{
            startCareerLevel("2");
          }


          }>Play</Button>
          
        </Col>
        <Col
          style={{
            display: 'flex',
            marginLeft:"17%",
            width:"175px",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
                <Tooltip  color={"rgba(14,118,254,1)"} mouseLeaveDelay={0} title="Fully pop a target balloon" placement="topLeft">
                  <span><b><u>Peak Efficiency</u></b></span>
              </Tooltip>
        </Col>
        <Col
          style={{
            display: 'flex',
            marginLeft:"2%",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
              
              <Checkbox disabled checked={StaticBallooonProgress.balloonInfo.ach2}></Checkbox>

        </Col>
        <Col
          style={{
            display: 'flex',
            marginLeft:"5%",
            width:"175px",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
                <Tooltip  color={"rgba(14,118,254,1)"} mouseLeaveDelay={0} title="Play a custom game" placement="topLeft">
                  <span><b><u>Full Control</u></b></span>
              </Tooltip>
        </Col>
        <Col
          style={{
            display: 'flex',
            marginLeft:"1%",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
              <Checkbox disabled checked={StaticBallooonProgress.balloonInfo.ach7}></Checkbox>
        </Col>
      </Row>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          padding: '10px',
          height: '10%'
          }}>
        <Col
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: "280px"
            }}>
          <span>Level Four: </span>
          <span>{socketContext.balloonInfo.levelFourScore} / 3</span>
          <Button onClick={ () =>{
            startCareerLevel("3");
          }


          }>Play</Button>
        </Col>

        <Col
          style={{
            display: 'flex',
            marginLeft:"17%",
            width:"175px",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
                <Tooltip  color={"rgba(14,118,254,1)"} mouseLeaveDelay={0} title="Pop the core of a layered balloon" placement="topLeft">
                  <span><b><u>Inner Core</u></b></span>
              </Tooltip>
        </Col>
        <Col
          style={{
            display: 'flex',
            marginLeft:"2%",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
              <Checkbox disabled checked={StaticBallooonProgress.balloonInfo.ach3}></Checkbox>
        </Col>
        <Col
          style={{
            display: 'flex',
            marginLeft:"5%",
            width:"175px",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
              <Tooltip  color={"rgba(14,118,254,1)"} mouseLeaveDelay={0} title="Play a game on both environments" placement="topLeft">
                  <span><b><u>World Traveler</u></b></span>
              </Tooltip>
        </Col>
        <Col
          style={{
            display: 'flex',
            marginLeft:"1%",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
              <Checkbox disabled checked={StaticBallooonProgress.balloonInfo.ach8}></Checkbox>
        </Col>
      </Row>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          padding: '10px',
          height: '10%'
          }}>
        <Col
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: "280px"
            }}>
          <span>Level Five: </span>
          <span>{socketContext.balloonInfo.levelFiveScore} / 3</span>
          <Button onClick={ () =>{
            startCareerLevel("4");
          }


          }>Play</Button>
        </Col>
        <Col
          style={{
            display: 'flex',
            marginLeft:"17%",
            width:"175px",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
              <Tooltip  color={"rgba(14,118,254,1)"} mouseLeaveDelay={0} title="Pop two normal balloons at the same time" placement="topLeft">
                  <span><b><u>Double Barreled</u></b></span>
              </Tooltip>
        </Col>
        <Col
          style={{
            display: 'flex',
            marginLeft:"2%",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
              <Checkbox disabled checked={StaticBallooonProgress.balloonInfo.ach4}></Checkbox>
        </Col>
        <Col
          style={{
            display: 'flex',
            marginLeft:"5%",
            width:"175px",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
                           <Tooltip  color={"rgba(14,118,254,1)"} mouseLeaveDelay={0} title="Finish Career mode" placement="topLeft">
                  <span><b><u>Game Over!</u></b></span>
              </Tooltip>
        </Col>
        <Col
          style={{
            display: 'flex',
            marginLeft:"1%",
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
              <Checkbox disabled checked={StaticBallooonProgress.balloonInfo.ach9}></Checkbox>
        </Col>
      </Row>
      </div>
      )
}