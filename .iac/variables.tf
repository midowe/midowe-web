variable "image_tag" {
}

variable "container_port" {
}

variable "environment" {
  default = "dev"
}

variable "registry_username" {
}

variable "registry_password" {
}

variable "endpoint_cms" {
  default = "https://cms.dev.midowe.co.mz/api"
}

variable "endpoint_accouting" {
  default = "https://eugqgyjdksk2hoi7rj6b23zjti0grskw.lambda-url.af-south-1.on.aws"
}
