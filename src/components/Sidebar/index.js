import React, { Component } from "react";

import { Container, NewPlaylist, Nav, Title } from "./styles";

import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

export default class Sidebar extends Component {
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
            <li>
              <a href="https://www.google.com/">Melhores do rock</a>
            </li>
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
