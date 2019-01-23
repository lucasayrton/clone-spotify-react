import React from "react";
import Sound from "react-sound";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlayerActions } from "../../store/ducks/player";

import { Botao } from "./styles";

import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";

const PlayAndPauseButton = ({ player, play, pause }) => (
  <>
    {!!player.currentSong && player.status === Sound.status.PLAYING ? (
      <Botao onClick={pause}>
        <img src={PauseIcon} alt="Play" />
      </Botao>
    ) : (
      <Botao onClick={play}>
        <img src={PlayIcon} alt="Play" />
      </Botao>
    )}
  </>
);

const mapStateToProps = state => ({
  player: state.player
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayAndPauseButton);
