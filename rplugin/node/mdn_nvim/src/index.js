import {
  Plugin, Function, Autocmd, Command,
} from 'neovim';

// If `Plugin` decorator can be called with options
@Plugin({
    name: 'mdn'
})
class mdnPlugin {
    @Command('LongCommand')
    async longCommand(args) {
        console.log('Output will be routed to $NVIM_NODE_LOG_FILE');
        const bufferName = await this.nvim.buffer.name;
        return bufferName;
    }

  @Command('TigrisSSS')
  async clear() {
    const buffer = await this.nvim.buffer;
    this.nvim.outWrite('Clearing\n');
    buffer.clearHighlight({ srcId: -1 });
    DEBUG_MAP.clear();
  }

    @Command('UsePromises')
    promiseExample() {
        return this.nvim.buffer.name.then((name) => {
            console.log(`Current buffer name is ${name}`);
        });
    }
}

export default mdnPlugin
