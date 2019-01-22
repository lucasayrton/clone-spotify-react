import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

import { Container, NewPlaylist, Nav, Title } from "./styles";

import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      }))
    }).isRequired
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <a href="https://www.google.com/">Navegar</a>
            </li>
            <li>
              <a href="https://www.google.com/">Rádio</a>
            </li>
          </Nav>

          <Nav>
            <Title>Sua biblioteca</Title>
            <li>
              <a href="https://www.google.com/">Seu Daily Mix</a>
            </li>
            <li>
              <a href="https://www.google.com/">Tocados recentemente</a>
            </li>
            <li>
              <a href="https://www.google.com/">Músicas</a>
            </li>
            <li>
              <a href="https://www.google.com/">Álbums</a>
            </li>
            <li>
              <a href="https://www.google.com/">Artistas</a>
            </li>
            <li>
              <a href="https://www.google.com/">Estações</a>
            </li>
            <li>
              <a href="https://www.google.com/">Arquivos locais</a>
            </li>
            <li>
              <a href="https://www.google.com/">Vídoes</a>
            </li>
            <li>
              <a href="https://www.google.com/">Podcasts</a>
            </li>
          </Nav>

          <Nav>
            <Title>Playlists</Title>
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
          Nova Playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
