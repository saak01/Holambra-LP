import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CepService } from '../../../../core/services/cep-services/cep.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-adress-form',
  templateUrl: './adress-form.component.html',
  styleUrls: ['./adress-form.component.scss']
})
export class AdressFormComponent {

  constructor(private cepService: CepService){}

  addressForm = new FormGroup({
    cep: new FormControl('', [Validators.minLength(8), Validators.maxLength(8)]),
    address: new FormControl('', [Validators.required]),
    neighborhood: new FormControl('', [Validators.required]),
    complement: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
  });

  cepSearch(): void {
    if(this.addressForm.get('cep')?.valid){
      firstValueFrom(this.cepService.getAddressDetailsByCep(this.addressForm.get('cep')?.value!))
      .then((addressDetails)=>{
        this.addressForm.patchValue({
          address: addressDetails.logradouro,
          neighborhood: addressDetails.bairro,
          complement: addressDetails.complemento,
          city: addressDetails.localidade,
          state: addressDetails.uf
        });
      })
      .catch((error)=> {
        console.log(error);
      })
    }
    else{
      this.addressForm.patchValue({
        address: '',
        neighborhood: '',
        complement: '',
        city: '',
        state: ''
      });
    }
  }

}
