import { Router } from "@angular/router";


export function LoginRedirect(user: string, router: Router) {
    if (user == "")
      router.navigate(['character_login'])
}