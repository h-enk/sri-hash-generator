import React, { Component } from 'react';
import DragNDrop from './DragNDrop';
import './App.css';
import { getBase64HashFromUrl, getResourceHTML, getBase64HashFromFile } from './utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      sha256: false,
      sha384: false,
      sha512: true,
      resource: '',
      submitting: false,
      copying: '',
    };
  }
  generate(getHash, filename) {
    this.setState({
      submitting: true,
      resource: '',
    });
    getHash()
      .then(
        (hash) => {
          this.setState({
            resource: getResourceHTML(filename, hash),
            submitting: false,
          });
        },
        () => {
          this.setState({
            submitting: false,
          });
        },
      );
  }
  getTypes() {
    return [
      this.state.sha256 && 'sha256',
      this.state.sha384 && 'sha384',
      this.state.sha512 && 'sha512',
    ].filter(_ => _);
  }
  onCopy = () => {
    if (navigator.clipboard) {
      this.setState({ submitting: true });
      navigator.clipboard
        .writeText(this.state.resource)
        .then(
          () => {
            this.setState({ copying: 'Copied!' });
            this.setState({ submitting: false });
            setTimeout(() => {
              this.setState({ copying: '' });
            }, 1000);
          },
          () => {
            this.setState({ submitting: false });
          },
        );
    }
  }
  onDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;
    const types = this.getTypes();
    this.generate(() => getBase64HashFromFile(types, file), `./${file.name}`);
  }
  onHashTypeChange = (e) => {
    const type = e.target.id;
    this.setState({ sha256: false });
    this.setState({ sha384: false });
    this.setState({ sha512: false });
    this.setState({ [type]: !this.state[type] });
  }
  onUrlChange = (e) => {
    this.setState({
      url: e.target.value,
    });
  }
  onReset = () => {
    this.setState({
      url: '',
      sha256: false,
      sha384: false,
      sha512: true,
      resource: '',
      submitting: false,
      copying: '',
    });
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.submitting) return;
    const url = this.state.url.trim();
    if (!url) return;
    const types = this.getTypes();
    this.generate(() => getBase64HashFromUrl(types, url), url);
  }
  render() {
    const { url, sha256, sha384, sha512, submitting, resource } = this.state;
    const isValid = url.trim().length > 0 && (sha256 || sha384 || sha512);
    return (
      <DragNDrop onDrop={this.onDrop} className="container">
        <main>
          <h1>Subresource Integrity (SRI) Generator</h1>
          <form onSubmit={this.onSubmit}>
            <div className="field-group">
              <p><label htmlFor="input">Enter URL of JS or CSS file — or drop a local file.</label></p>
              <input id="input" type="text" value={url} onChange={this.onUrlChange} />
            </div>
            <div className="field-group">
              <input id="sha256" type="radio" name="strenght" value={sha256} checked={sha256} onChange={this.onHashTypeChange} />
              <label htmlFor="sha256">SHA-256</label>
              <input id="sha384" type="radio" name="strenght" value={sha384} checked={sha384} onChange={this.onHashTypeChange} />
              <label htmlFor="sha384">SHA-384</label>
              <input id="sha512" type="radio" name="strenght" value={sha512} checked={sha512} onChange={this.onHashTypeChange} />
              <label htmlFor="sha512">SHA-512</label>
            </div>
            <button type="submit" disabled={!isValid || submitting}>Generate</button>
          </form>
          <section>
            <span>{resource}</span>
          </section>
          <div className="operation">
            <button type="reset" aria-label="reset form input and output" onClick={this.onReset} disabled={!(url || resource)}>Reset</button>
            <button
              aria-label="copy generated HTML with integrity"
              onClick={this.onCopy}
              className="btn-copy"
              disabled={!resource}
            >
              Copy
            </button>
            <span className="copying">{this.state.copying}</span>
          </div>
        </main>
        <footer>
          <span>Open-source MIT Licensed. </span>
          <a href="https://github.com/h-enk/sri-hash-generator">GitHub</a>
        </footer>
      </DragNDrop>
    );
  }
}

export default App;
