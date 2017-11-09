import {Component, OnInit} from '@angular/core';

export interface PortfolioModalModel {
    modalName:string;
    thumbImage:string;
    clientName:string;
    category:string;
    project:PortfolioProject;
}

export interface PortfolioProject {
    projectName:string;
    projectShortDescription:string;
    fullImage:string;
    projectLongDescription:string;
    projectDate:string;
}


@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

    public portfolioModalData:PortfolioModalModel[] = [
        {
            modalName: "threadsModal",
            thumbImage: "../../assets/img/portfolio/01-thumbnail.jpg",
            clientName: "Threads",
            category: "Illustration",
            project: {
                projectName: "Project Name",
                projectShortDescription: "Lorem ipsum dolor sit amet consectetur.",
                fullImage: "../../assets/img/portfolio/01-full.jpg",
                projectLongDescription: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
                projectDate: "January 2017"
            }
        },
        {
            modalName: "exploreModal",
            thumbImage: "../../assets/img/portfolio/02-thumbnail.jpg",
            clientName: "Explore",
            category: "Graphic Design",
            project: {
                projectName: "Project Name",
                projectShortDescription: "Lorem ipsum dolor sit amet consectetur.",
                fullImage: "../../assets/img/portfolio/02-full.jpg",
                projectLongDescription: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
                projectDate: "February 2017"
            }
        },
        {
            modalName: "finishModal",
            thumbImage: "../../assets/img/portfolio/03-thumbnail.jpg",
            clientName: "Finish",
            category: "Identity",
            project: {
                projectName: "Project Name",
                projectShortDescription: "Lorem ipsum dolor sit amet consectetur.",
                fullImage: "../../assets/img/portfolio/03-full.jpg",
                projectLongDescription: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
                projectDate: "March 2017"
            }
        },
        {
            modalName: "linesModal",
            thumbImage: "../../assets/img/portfolio/04-thumbnail.jpg",
            clientName: "Lines",
            category: "Branding",
            project: {
                projectName: "Project Name",
                projectShortDescription: "Lorem ipsum dolor sit amet consectetur.",
                fullImage: "../../assets/img/portfolio/04-full.jpg",
                projectLongDescription: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
                projectDate: "April 2017"
            }
        },
        {
            modalName: "southwestModal",
            thumbImage: "../../assets/img/portfolio/05-thumbnail.jpg",
            clientName: "Southwest",
            category: "Web Design",
            project: {
                projectName: "Project Name",
                projectShortDescription: "Lorem ipsum dolor sit amet consectetur.",
                fullImage: "../../assets/img/portfolio/05-full.jpg",
                projectLongDescription: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
                projectDate: "May 2017"
            }
        },
        {
            modalName: "windowModal",
            thumbImage: "../../assets/img/portfolio/06-thumbnail.jpg",
            clientName: "Window",
            category: "Photography",
            project: {
                projectName: "Project Name",
                projectShortDescription: "Lorem ipsum dolor sit amet consectetur.",
                fullImage: "../../assets/img/portfolio/06-full.jpg",
                projectLongDescription: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
                projectDate: "May 2017"
            }
        }
    ];

    public portfolioData: PortfolioModalModel;

    constructor() {
    }

    ngOnInit() {
    }

    portfolioClick(portfolio:PortfolioModalModel):void {
        this.portfolioData = portfolio;
    }

}
