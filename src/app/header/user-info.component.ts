import { UserInfoService } from "./user-info.service";
import { Component, OnInit, Injectable } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable()
@Component({
    selector: "tesla-user-info",
    templateUrl: "user-info.component.html"
})

export class UserInfoComponent implements OnInit {
    myInfo: UserInfo | undefined;
    
    constructor(private userInfoService:UserInfoService) {
    }
    ngOnInit(): void {
        this.showUserInfo();
    }

    showUserInfo() {
        this.userInfoService.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data);
            this.myInfo = data;
        })
    }
}
