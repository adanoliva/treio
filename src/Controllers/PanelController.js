import datos from '../Global/dataGlobal';
export default class PanelController 
{
    panelContent = [];
    //Constructor, llama al método de carga de paneles
    constructor(){
            this.panelContent = datos.dataPanel;
    }

    //Método get que devuelve los paneles
    get(){
        return this.panelContent;
    }

    //Método para añadir un panel nuevo
    add(panel){
        this.panelContent.push(panel);
        this.savePanels();
    }

    savePanels(){
        localStorage.setItem("panels", this.panelContent);
    }

    localPanels(){
        let local = localStorage.getItem("panels");

        if (local.length > 0) {
            this.panelContent = local;
        }
        else{
            this.panelContent = datos.dataPanel;
        }
    }
}